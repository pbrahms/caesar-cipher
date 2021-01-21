import encrypt from './encrypt'

// Decrypt function is encrypt function with inverted key value (positive to negative and vice versa)
const decrypt = (plaintext, key) => encrypt(plaintext, key * -1);

export default decrypt;
