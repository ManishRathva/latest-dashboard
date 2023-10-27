export class ConfigApi {
    public static SERVER_HOST = "http://localhost:3000";
    public static BASE_URL = ConfigApi.SERVER_HOST;
    public static URLS: any = {
      CREAT:ConfigApi.BASE_URL+"/create-user",
      LOGIN:ConfigApi.BASE_URL+"/login",
      ADD:ConfigApi.BASE_URL+"/add-user",
      GET:ConfigApi.BASE_URL+"/get-list",
      UPDATE:ConfigApi.BASE_URL+"/update",
      DELETE:ConfigApi.BASE_URL+"/detete",
    }
}
/*  */