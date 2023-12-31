import Swal from 'sweetalert2'

function SwalAlert({ title, text, icon, ...other }) {
    return Swal.fire({
        buttonsStyling: false,
        customClass: {
            popup: 'bg-body-tertiary',
            confirmButton: 'btn btn-primary mx-1',
            cancelButton: 'btn btn-primary mx-1',
            title: 'text-body',
            htmlContainer: 'text-body',
        },
        title: title,
        text: text,
        icon: icon,
        scrollbarPadding: false,
        ...other,
    })
}

export { SwalAlert }
