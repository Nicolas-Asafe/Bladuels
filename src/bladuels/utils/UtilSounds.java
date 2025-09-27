package bladuels.utils;

import javax.sound.sampled.*;
import java.io.File;
import java.io.IOException;

public class UtilSounds {

    public static void playSound(String path) {
        try {
            AudioInputStream audioInput = AudioSystem.getAudioInputStream(new File(path));
            Clip clip = AudioSystem.getClip();
            clip.open(audioInput);
            clip.start();
        } catch (UnsupportedAudioFileException | IOException | LineUnavailableException e) {
            e.printStackTrace();
        }
    }
}

