// import React, { useState, useRef } from 'react';
// import { Card } from '@cleartax/truss/card';
// import { Button } from '@cleartax/truss/button';
// import { useLayout } from '../../contexts/LayoutContext';
// import { useNavigate } from 'react-router-dom';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@cleartax/truss/tabs';
// import { useDataPosting } from '../hooks/useDataPosting';

// /**
//  * DataPostingForm component
//  * Provides a form for uploading files for data posting
//  */
// const DataPostingForm: React.FC = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('upload');
//   const [file, setFile] = useState<File | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
  
//   // Set page title using layout context
//   const { setPageTitle } = useLayout();
//   React.useEffect(() => {
//     setPageTitle('Upload Data');
//   }, [setPageTitle]);
  
//   // Use data posting hook for file upload functionality
//   const { 
//     uploadFile,
//     uploadProgress,
//     isUploading,
//     uploadError: error,
//     templates
//   } = useDataPosting();
  
//   // Handle file selection
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//     }
//   };
  
//   // Reset the form
//   const resetForm = () => {
//     setFile(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };
  
//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!file) return;
    
//     // Upload the file using the hook
//     uploadFile(file);
//   };
  
//   return (
//     <div className="data-posting-form">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Data Upload</h1>
//         <Button 
//           variant="outline"
//           onClick={() => navigate('/data-posting')}
//         >
//           Back to Dashboard
//         </Button>
//       </div>
      
//       <Tabs defaultValue="upload" className="w-full" onValueChange={setActiveTab}>
//         <TabsList className="mb-6">
//           <TabsTrigger value="upload">Upload Data</TabsTrigger>
//           <TabsTrigger value="templates">Templates</TabsTrigger>
//           <TabsTrigger value="instructions">Instructions</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="upload">
//           <Card className="p-6">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Upload New Data</h2>
//                 <p className="text-gray-600 mb-4">
//                   Upload CSV or Excel files with your data. Make sure the data follows the required format.
//                 </p>
                
//                 <div className="mb-6">
//                   <label htmlFor="file-upload" className="block mb-2 font-medium">
//                     Select File
//                   </label>
//                   <input
//                     id="file-upload"
//                     ref={fileInputRef}
//                     type="file"
//                     accept=".csv,.xlsx,.xls"
//                     onChange={handleFileChange}
//                     disabled={isUploading}
//                     className="block w-full border border-gray-300 rounded p-2 text-sm"
//                   />
//                   <p className="mt-1 text-sm text-gray-500">
//                     Accepted formats: CSV, Excel (.xlsx, .xls)
//                   </p>
//                 </div>
                
//                 {file && (
//                   <div className="mb-6 p-3 bg-gray-50 rounded">
//                     <p className="font-medium mb-1">Selected File:</p>
//                     <p className="text-sm">{file.name} ({(file.size / 1024).toFixed(2)} KB)</p>
//                   </div>
//                 )}
                
//                 {isUploading && (
//                   <div className="mb-6">
//                     <p className="text-sm mb-2">Uploading... {uploadProgress}%</p>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div 
//                         className="bg-blue-600 h-2.5 rounded-full" 
//                         style={{ width: `${uploadProgress}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 )}
                
//                 {error && (
//                   <div className="mb-6 p-3 bg-red-50 text-red-700 rounded">
//                     <p>{error instanceof Error ? error.message : 'Upload failed. Please try again.'}</p>
//                   </div>
//                 )}
                
//                 <div className="flex gap-4">
//                   <Button
//                     type="submit"
//                     variant="default"
//                     disabled={!file || isUploading}
//                   >
//                     {isUploading ? 'Uploading...' : 'Upload File'}
//                   </Button>
                  
//                   <Button
//                     type="button"
//                     variant="outline"
//                     disabled={isUploading}
//                     onClick={resetForm}
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               </div>
//             </form>
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="templates">
//           <Card className="p-6">
//             <h2 className="text-lg font-semibold mb-4">Download Templates</h2>
//             <p className="text-gray-600 mb-6">
//               Use these templates to ensure your data is in the correct format for uploading.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {templates.map(template => (
//                 <Card key={template.id} className="p-4">
//                   <h3 className="font-medium mb-2">{template.name}</h3>
//                   <p className="text-sm text-gray-600 mb-4">
//                     {template.description}
//                   </p>
//                   <Button 
//                     variant="outline" 
//                     size="sm"
//                   >
//                     Download {template.format}
//                   </Button>
//                 </Card>
//               ))}
//             </div>
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="instructions">
//           <Card className="p-6">
//             <h2 className="text-lg font-semibold mb-4">Upload Instructions</h2>
            
//             <div className="mb-6">
//               <h3 className="font-medium mb-2">File Format Requirements</h3>
//               <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                 <li>Use CSV or Excel format (.csv, .xlsx, .xls)</li>
//                 <li>Maximum file size: 10MB</li>
//                 <li>First row must contain column headers</li>
//                 <li>Required columns must not be empty</li>
//                 <li>Dates should be in YYYY-MM-DD format</li>
//               </ul>
//             </div>
            
//             <div className="mb-6">
//               <h3 className="font-medium mb-2">Upload Process</h3>
//               <ol className="list-decimal pl-5 space-y-1 text-gray-700">
//                 <li>Download the appropriate template</li>
//                 <li>Fill in your data following the format</li>
//                 <li>Save the file in CSV or Excel format</li>
//                 <li>Upload the file using the upload tab</li>
//                 <li>Wait for the upload to complete</li>
//                 <li>Check the upload status on the dashboard</li>
//               </ol>
//             </div>
            
//             <div>
//               <h3 className="font-medium mb-2">Common Issues</h3>
//               <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                 <li>Missing required columns</li>
//                 <li>Invalid data formats</li>
//                 <li>Duplicate entries</li>
//                 <li>Exceeding file size limit</li>
//               </ul>
//             </div>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default DataPostingForm;
