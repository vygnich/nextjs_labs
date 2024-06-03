type MemeRes ={
    count: number,
    memes: [
        Meme
    ]
}
type Meme ={
    preview: [
        string
    ]
}
export default async function getMemes(){
    const memes:MemeRes |undefined = await fetch(`https://meme-api.com/gimme/10`).then((data) => data.json())
    return memes?.memes
}