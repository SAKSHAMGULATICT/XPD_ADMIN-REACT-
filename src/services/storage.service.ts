/**
 * Storage service for handling localStorage and sessionStorage
 */

/**
 * Set an item in localStorage
 * @param key Storage key
 * @param value Value to store
 */
export const setLocalItem = (key: string, value: any): void => {
  try {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, String(value));
    }
  } catch (error) {
    console.error('Error setting localStorage item:', error);
  }
};

/**
 * Get an item from localStorage
 * @param key Storage key
 * @param defaultValue Default value if key not found
 * @returns Stored value or default value
 */
export const getLocalItem = <T>(key: string, defaultValue?: T): T | null => {
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      return defaultValue || null;
    }

    try {
      return JSON.parse(value) as T;
    } catch {
      // Not JSON, return as is
      return value as unknown as T;
    }
  } catch (error) {
    console.error('Error getting localStorage item:', error);
    return defaultValue || null;
  }
};

/**
 * Remove an item from localStorage
 * @param key Storage key
 */
export const removeLocalItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing localStorage item:', error);
  }
};

/**
 * Clear all items from localStorage
 */
export const clearLocalStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

/**
 * Set an item in sessionStorage
 * @param key Storage key
 * @param value Value to store
 */
export const setSessionItem = (key: string, value: any): void => {
  try {
    if (typeof value === 'object') {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.setItem(key, String(value));
    }
  } catch (error) {
    console.error('Error setting sessionStorage item:', error);
  }
};

/**
 * Get an item from sessionStorage
 * @param key Storage key
 * @param defaultValue Default value if key not found
 * @returns Stored value or default value
 */
export const getSessionItem = <T>(key: string, defaultValue?: T): T | null => {
  try {
    const value = sessionStorage.getItem(key);
    if (value === null) {
      return defaultValue || null;
    }

    try {
      return JSON.parse(value) as T;
    } catch {
      // Not JSON, return as is
      return value as unknown as T;
    }
  } catch (error) {
    console.error('Error getting sessionStorage item:', error);
    return defaultValue || null;
  }
};

/**
 * Remove an item from sessionStorage
 * @param key Storage key
 */
export const removeSessionItem = (key: string): void => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing sessionStorage item:', error);
  }
};

/**
 * Clear all items from sessionStorage
 */
export const clearSessionStorage = (): void => {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.error('Error clearing sessionStorage:', error);
  }
};

export default {
  local: {
    get: getLocalItem,
    set: setLocalItem,
    remove: removeLocalItem,
    clear: clearLocalStorage,
  },
  session: {
    get: getSessionItem,
    set: setSessionItem,
    remove: removeSessionItem,
    clear: clearSessionStorage,
  },
};
