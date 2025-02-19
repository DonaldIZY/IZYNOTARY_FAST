/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { shuffle } from './shuffle.util';

export class Password {

    static async generateRandomPassword(length: number): Promise<string> {
        if (length < 8) {
            throw new Error("La taille du mot de passe doit être supérieure ou égale à 4.");
        }

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numericChars = "0123456789";
        const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

        const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;

        // Assurez-vous que le mot de passe contient au moins une lettre minuscule, une majuscule, un chiffre et un caractère spécial
        let password = [
            lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)],
            uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)],
            numericChars[Math.floor(Math.random() * numericChars.length)],
            specialChars[Math.floor(Math.random() * specialChars.length)]
        ];

        // Ajoutez des caractères aléatoires pour atteindre la longueur requise
        for (let i = password.length; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password.push(allChars[randomIndex]);
        }

        // Mélangez les caractères pour éviter que les premiers caractères respectent un ordre prévisible
        password = shuffle.shuffleArray(password);

        return password.join('');
    }

    static async hashPassword(password: string): Promise<{ hashedValue: string }> {
        const saltRounds = 10;
        const hashedValue = await bcrypt.hash(password, saltRounds);

        return { hashedValue };
    }

    static async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}

