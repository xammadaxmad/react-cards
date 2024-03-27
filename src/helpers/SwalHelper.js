import Swal from "sweetalert2"

const SwalHelper = {
    'show': function (status, message) {
        Swal.fire({
            title: status,
            text: message,
            icon: status
        })
    }
}


export default SwalHelper