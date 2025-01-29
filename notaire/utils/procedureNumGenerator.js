export default function (type, totalProcedures) {
    const types = {
        "Vente": "VT",
        "Constitution de société": "CS",
        "Modification de société": "MS",
        "Succession de biens mobiliers": "SM",
        "Succession de biens immobiliers": "SI"
    };

    if (!types[type]) {
        throw new Error("Type de procédure invalide.");
    }

    const date = new Date();
    const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
    const numero = (totalProcedures + 1).toString().padStart(4, '0');

    return `${types[type]}${dateStr}-${numero}`;
}