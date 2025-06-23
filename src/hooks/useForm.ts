import { useState, useCallback, ChangeEvent } from 'react';

/**
 * Type for form values
 */
type FormValues = Record<string, any>;

/**
 * Type for form errors
 */
type FormErrors = Record<string, string | undefined>;

/**
 * Type for form validation rules
 */
type ValidationRules = Record<string, (value: any) => string | undefined>;

/**
 * Custom hook for form handling with validation
 * @param initialValues Initial form values
 * @param validationRules Form validation rules
 * @returns Form state and helper functions
 */
export function useForm<T extends FormValues>(
  initialValues: T,
  validationRules: ValidationRules = {}
) {
  // State for form values
  const [values, setValues] = useState<T>(initialValues);
  
  // State for form errors
  const [errors, setErrors] = useState<FormErrors>({});
  
  // State for form touched fields
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  /**
   * Handle input change
   */
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      
      // Handle checkboxes specially
      if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setValues((prev) => ({
          ...prev,
          [name]: checked,
        }));
      } else {
        setValues((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
      
      // Validate field on change if it's been touched
      if (touched[name] && validationRules[name]) {
        const error = validationRules[name](value);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [touched, validationRules]
  );
  
  /**
   * Handle field blur
   */
  const handleBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      
      // Mark field as touched
      setTouched((prev) => ({
        ...prev,
        [name]: true,
      }));
      
      // Validate field on blur
      if (validationRules[name]) {
        const error = validationRules[name](value);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [validationRules]
  );
  
  /**
   * Set a specific form value programmatically
   */
  const setValue = useCallback((name: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Validate field if it's been touched
    if (touched[name] && validationRules[name]) {
      const error = validationRules[name](value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  }, [touched, validationRules]);
  
  /**
   * Set multiple form values programmatically
   */
  const setMultipleValues = useCallback((newValues: Partial<T>) => {
    setValues((prev) => ({
      ...prev,
      ...newValues,
    }));
    
    // Validate all changed fields that have been touched
    const newErrors = { ...errors };
    Object.keys(newValues).forEach((key) => {
      if (touched[key] && validationRules[key]) {
        const error = validationRules[key](newValues[key]);
        newErrors[key] = error;
      }
    });
    
    setErrors(newErrors);
  }, [touched, validationRules, errors]);
  
  /**
   * Reset form to initial values
   */
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);
  
  /**
   * Validate all form fields
   */
  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    // Validate all fields with validation rules
    Object.keys(validationRules).forEach((key) => {
      const error = validationRules[key](values[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  }, [values, validationRules]);
  
  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    (onSubmit: (values: T) => void) => async (e: React.FormEvent) => {
      e.preventDefault();
      
      // Mark all fields as touched
      const allTouched: Record<string, boolean> = {};
      Object.keys(values).forEach((key) => {
        allTouched[key] = true;
      });
      setTouched(allTouched);
      
      // Validate all fields
      const isValid = validateForm();
      
      if (isValid) {
        setIsSubmitting(true);
        try {
          await onSubmit(values);
        } finally {
          setIsSubmitting(false);
        }
      }
    },
    [values, validateForm]
  );
  
  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    setMultipleValues,
    resetForm,
    validateForm,
  };
}
