import { FreshContext, Handlers } from "$fresh/server.ts";

import { CityCoords } from "../../types.ts";

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown>) => {
      
      try{
        const {city} = ctx.params;
        
        const API_KEY = Deno.env.get("NIJA_KEY");

        if (!API_KEY) {
            return new Response("Error - NINJA API KEY NOT FOUND", { status: 500 });
        }

        const url = "https://api.api-ninjas.com/v1/city?name=" + city;
    
        const city_response = await fetch(url, {
            headers: {
                "X-API-KEY": API_KEY
            }
        });

        const cities:CityCoords[] = await city_response.json();

        if (cities.length === 0) {
            return new Response(JSON.stringify("City not found"), { 
                headers: {
                    "Content-Type":"application/json"
                },
                status: 404
            });
        }

        return new Response(JSON.stringify(cities), {
            headers: {
                "Content-Type":"application/json"
            },
            status: 200
        });
        
      }catch(e){
          console.error(e);
      }
    }
};