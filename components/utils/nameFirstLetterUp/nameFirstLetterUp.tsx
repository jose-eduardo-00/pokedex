export default function nameFirstLetterUp({ name }: { name: string }) {
    return name.charAt(0).toUpperCase() + name.substring(1);
}
