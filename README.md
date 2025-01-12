# Unhandled error in Express.js route parameter parsing
This repository demonstrates a common error in Express.js applications: improper handling of route parameters.  The `bug.js` file shows code vulnerable to unexpected input, while `bugSolution.js` provides a corrected version with robust error handling.

## Bug
The initial code lacks proper validation and error handling for route parameters.  Specifically, it assumes the `:id` parameter will always be a valid number, leading to crashes if an invalid parameter is provided.

## Solution
The solution involves adding explicit validation and error handling to check if the route parameter is a valid number. If not, an appropriate error response is sent to the client.