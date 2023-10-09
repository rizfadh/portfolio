import Swal from 'sweetalert2'

function SwalAlert({ title, text, icon, ...other }) {
    return Swal.fire({
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-primary',
        },
        title: title,
        text: text,
        icon: icon,
        ...other,
    })
}

export { SwalAlert }
