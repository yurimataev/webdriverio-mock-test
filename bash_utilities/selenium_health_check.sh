# Selenium health check
echo "Checking if Selenium is ready"

while [ "$( curl -s http://selenium:4444/wd/hub/status | jq -r .value.ready )" != "true" ]
do
    echo "Selenium is not ready"
    sleep 1
done

echo "Selenium is ready!"

