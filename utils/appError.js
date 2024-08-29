class AppError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);  // constructor function call will not appear in stack trace
        // new object created & constructor function is called then that function call will not appear in stack trace 
    }
}

module.exports = AppError;