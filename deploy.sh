#!/bin/sh

npm run build &&
cd build &&
gcloud compute scp * static-ma:/usr/share/nginx/www/csv.fnx.io --recurse --project "ma-web" --zone "europe-west1-b";
