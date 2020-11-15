import { AxiosResponse } from 'axios';
declare function checkRouter(items: string[]): Promise<AxiosResponse<any>>;
declare function setDataLimit(args: {
    model: string;
    serial: string;
    limit: number;
}): Promise<AxiosResponse<any>>;
declare const _default: {
    checkRouter: typeof checkRouter;
    setDataLimit: typeof setDataLimit;
};
export default _default;
