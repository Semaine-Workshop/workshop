
import API from "@ibaraki-douji/api";
import {config} from "dotenv";

config();

API.debug = true;
API.swagger = true;
API.websocket = true;



API.start(4521);
