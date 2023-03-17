export const IsFecha = (fecha: string): boolean => {
    const regexFecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return regexFecha.test(fecha);
  };