import {createContext, useState, useContext, ReactNode} from 'react';
import Video from 'react-native-video';
interface SoundContextProps {
    playSound: (soundName: string, repeat: boolean) => void;
    stopSound: (soundName: string) => void;
}

interface SoundProviderProps {
    children : ReactNode;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined)
const soundPaths : {[key: string]: string} = {
    ui:require('../assets/sfx/ui.mp3'),
    candy_shuffle:require('../assets/sfx/candy_shuffle.mp3'),
    candy_clear:require('../assets/sfx/candy_clear.mp3'),
    bg: require('../assets/sfx/bg.mp3'),
    cheer:require('../assets/sfx/cheer.mp3'),
}
const SoundProvider = ({children}:SoundProviderProps) =>{
    
    const [sounds, setSounds] = useState<any[]>([]);
    const playSound = (soundName: string, repeat: boolean) =>{
        const soundPath = soundPaths[soundName]
        if(soundPath){
            setSounds((prevSound)=>{
                const updatedSounds = prevSound?.filter((sound)=> sound.id !== soundName)
                return [
                    ...updatedSounds,
                    {
                        id: soundName,
                        path: soundPath,
                        repeat
                    }
                ]
            })
        }
        else{
            console.log(`Sound ${soundName} not found`)
        }
    }

    const stopSound = (soundName: string) =>{
        setSounds((prevSounds)=> prevSounds.filter((sound)=> sound.id !== soundName))
    }
    
    return (
        <SoundContext.Provider value={{playSound, stopSound}}>
            {children}
            {sounds?.map((sound)=>(
                <Video key={sound.id} source={sound.path} paused={false} repeat={sound.repeat} volume={0.4} muted={false} resizeMode='cover' style={{ position: "absolute" , width: 0, height: 0}}/>
            ))}
        </SoundContext.Provider>
    )
}
const useSound = ():SoundContextProps =>{
    const context = useContext(SoundContext)
    if(!context){
        throw new Error("useSound must be used within a sound provider")
    }
    return context;
}

export { SoundProvider , useSound};