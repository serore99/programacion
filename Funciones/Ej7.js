function validarHoras (h,m,s){
    if(h<0||h>23){
        return false;
    }
    if(m<0 || m > 59){
        return false;
    }
    if(s<0 || s>59){
        return false;
    }
    return true;
}
