const info = (namespace: string, message: string, object?: any) => {
    const msg = `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`;
    if (object) {
        console.info(msg, object);
    } else {
        console.info(msg);
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    const msg = `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`;
    if (object) {
        console.warn(msg, object);
    } else {
        console.warn(msg);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    const msg = `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`;
    if (object) {
        console.error(msg, object);
    } else {
        console.error(msg);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    const msg = `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`;
    if (object) {
        console.debug(msg, object);
    } else {
        console.debug(msg);
    }
};

const getTimeStamp = (): string => {
    return new Date().toISOString();
};

export default {
    info,
    warn,
    error,
    debug
};
