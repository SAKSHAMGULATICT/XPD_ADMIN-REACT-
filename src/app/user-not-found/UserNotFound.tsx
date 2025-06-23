import React from 'react';
import { Button } from '@cleartax/truss/button';
import { Card } from '@cleartax/truss/card';

/**
 * User Not Found component
 * Displayed when a user tries to access the application but their account is not found
 */
const UserNotFound: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="max-w-md p-6 text-center">
        <div className="mb-6">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="17" y1="8" x2="23" y2="14"></line>
              <line x1="23" y1="8" x2="17" y2="14"></line>
            </svg>
          </div>
          <h1 className="mb-2 text-2xl font-bold">User Not Found</h1>
          <p className="text-gray-600">
            We couldn't find your account in our system. If you believe this is an error, 
            please contact your administrator or support team.
          </p>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            If you're trying to access the application for the first time, please ensure that 
            your account has been properly provisioned by your organization.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button
            variant="default"
            className="w-full"
            onClick={() => window.location.href = '/'}
          >
            Return to Login
          </Button>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open('mailto:support@example.com')}
          >
            Contact Support
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserNotFound;
