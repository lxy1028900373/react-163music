const devBaseURL= "https://123.207.32.32:9001"		//开发环境
const proBaseURL= "https://production.org"			//生产环境
export const BASE_URL= process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIMEOUT= 5000;