import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

export class Password {

    static async generateRandomPassword(length: number): Promise<string> {
        if (length < 1) {
            throw new Error("La taille du mot de passe doit être supérieure ou égale à 1.");
        }
      
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numericChars = "0123456789";
        const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";
      
        const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;
      
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
      
        return password;
    }

    static async hashPassword(password: string): Promise<{ saltedHash: string; baseHash: string }> {
        const saltRounds = 10;
        const saltedHash = await bcrypt.hash(password, saltRounds);

        const baseHash = crypto.createHash('sha256').update(password).digest('hex'); // Hash sans sel 

        return { saltedHash, baseHash };
    }
}

