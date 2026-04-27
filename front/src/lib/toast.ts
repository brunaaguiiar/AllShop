import { getToastQueue } from "@heroui/react";

export const toastQueue = getToastQueue();

export const toast = {
  success: (description: string, title = "Sucesso") => {
    toastQueue.add({
      title,
      description,
      color: "success",
      variant: "solid",
    });
  },

  error: (description: string, title = "Erro") => {
    toastQueue.add({
      title,
      description,
      color: "danger",
      variant: "solid",
    });
  },

  warning: (description: string, title = "Atenção") => {
    toastQueue.add({
      title,
      description,
      color: "warning",
      variant: "solid",
    });
  },

  info: (description: string, title = "Info") => {
    toastQueue.add({
      title,
      description,
      color: "default",
      variant: "solid",
    });
  },
};