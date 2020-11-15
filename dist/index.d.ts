import { AxiosResponse } from 'axios';
declare function checkRouter(items: string[]): Promise<AxiosResponse<any>>;
declare function setDataLimit(args: {
    model: string;
    serial: string;
    limit: number;
}): Promise<AxiosResponse<any>>;
declare function rebootRouter(args: {
    model: string;
    serial: string;
}): Promise<AxiosResponse>;
declare const _default: {
    checkRouter: typeof checkRouter;
    setDataLimit: typeof setDataLimit;
    rebootRouter: typeof rebootRouter;
};
export default _default;
