import { toast } from "react-toastify";

export const showToast = (message, type = "Success") => {
    const option = {
        position: "top-right",
        autoClose: 3000, //auto close in 3 sec
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:"light",
        
    }
    if (type === "Success") {
        toast.success(message,option)
    }
    else if (type === 'error') {
        toast.error(message,option)
    }
    else if (type === 'info') {
        toast.info(message,option)
    }
    else if (type === 'warning') {
        toast.warning(message,option)
    }
}