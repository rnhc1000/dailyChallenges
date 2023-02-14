<?php

namespace app\classes;

class Services {

    public function testaCurl() {

        // Create a curl handle
        $ch = curl_init('https://rl7-sandbox-api.useredecloud.com.br/partner/v1/organizations/requests/features/merchant-statement');

        // Execute
        curl_exec($ch);

        // Check if any error occured
        if (!curl_errno($ch)) {
            $info = curl_getinfo($ch);

            echo 'Took ' . $info['total_time'] . ' seconds to send a request to ' . $info['http_code'];
        }

        // Close handle
        curl_close($ch);
  
    }
}