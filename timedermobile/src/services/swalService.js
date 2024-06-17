import Swal from 'sweetalert2';

export const showSuccessMessage = (message) => {
    return Swal.fire('Success!', message, 'success');
}

export const showInfoMessage = (message) => {
    return Swal.fire('Info!', message, 'info');
}

export const showErrorMessage = (message) => {
    return Swal.fire('Error!', message, 'error');
}