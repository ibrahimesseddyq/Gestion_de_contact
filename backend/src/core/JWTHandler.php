<?php 
namespace app\core;
use Firebase\JWT\JWT;

class JWTHandler
{
    protected $jwt_secrect;
    protected $token;
    protected $issuedAt;
    protected $expire;
    protected $jwt;
    public function __construct()
    {
        date_default_timezone_set('Africa/Casablanca');
        $this->issuedAt = time();

        $this->expire = $this->issuedAt + 3600;

        $this->jwt_secrect = "bghina_sandwich";
    }
    public function getExpire(){
        return $this->expire;
    }
    public function jwtEncodeData($iss, $data)
    {

        $this->token = [
            "iss" => $iss,
            "aud" => $iss,
            "iat" => $this->issuedAt,
            "exp" => $this->expire,
            "data" => $data
        ];
        $this->jwt = JWT::encode($this->token, $this->jwt_secrect, 'HS256');
        return $this->jwt;
    }

    }
    ?>