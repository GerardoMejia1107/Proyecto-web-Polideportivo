import Swal from "sweetalert2";

export const outcome = {
    success: (title = "Operación exitosa", text = "La operación se realizó con éxito") => {
        Swal.fire({
            title,
            text,
            icon: "success",
            customClass:{
                htmlContainer: 'swal-custom-text',
            }
        });
    },
    error: (title = "Error", text = "Ocurrió un error en la operación") => {
        Swal.fire({
            title,
            text,
            icon: "error",
            customClass:{
                htmlContainer: 'swal-custom-text',
            }
        });
    },
    warning: (title = "Advertencia", text = "Revisa esta información antes de continuar") => {
        Swal.fire({
            title,
            text,
            icon: "warning",
            customClass:{
                htmlContainer: 'swal-custom-text',
            }
        });
    },
    info: (title = "Información", text = "Aquí tienes más detalles sobre la operación") => {
        Swal.fire({
            title,
            text,
            icon: "info",
            customClass:{
                htmlContainer: 'swal-custom-text',
            }
        });
    },
};
