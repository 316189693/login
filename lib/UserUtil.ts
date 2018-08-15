interface User {
    user_name: string;
    user_id: number;
    mail:  string;
    user_salt: string;
    user_pass_word: string;
}

interface User_token {
    user_id: string;
    user_token: string;
    expire_time: Date;
    
}