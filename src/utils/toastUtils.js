import { colors } from "../components/colors";
import { toast } from "../components/toast";



export const message = (textMessage, status) => {
    let color = status == 'success' ? toast.color.GREEN : toast.color.RED;
    toast.bottom(this.refs, textMessage, 3000, color);
}

export const viewMessage = (toastRef, message, color = colors.SUCCESS) => {
    toast.bottom(toastRef, message, 2000, color)
}

