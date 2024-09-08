export function getErrorMessage(error : unknown) {
    if (error instanceof Error) {
        return error.message;
    }

    console.log('this is a console log message');
    return String(error);

}