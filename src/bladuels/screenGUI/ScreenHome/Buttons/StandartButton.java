package bladuels.screenGUI.ScreenHome.Buttons;

import java.awt.Color;

import javax.swing.JButton;
import javax.swing.border.LineBorder;

import bladuels.utils.UtilSounds;

public class StandartButton {
	private void StyleButton(JButton jb) {
        jb.setOpaque(true);
        jb.setBorder(new LineBorder(Color.black, 2));
        jb.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jb.setContentAreaFilled(false);
        jb.setFocusPainted(false);
    }

    private void ClickButton(JButton jb, Runnable funcMousePressed, Runnable funcMouseReleased) {
        jb.addMouseListener(new java.awt.event.MouseAdapter() {
            @Override
            public void mousePressed(java.awt.event.MouseEvent e) {
                jb.setBorder(new LineBorder(Color.gray, 2));
                UtilSounds.playSound("assets/sounds/click/click.mp3");
                if (funcMousePressed != null) funcMousePressed.run();
            }

            @Override
            public void mouseReleased(java.awt.event.MouseEvent e) {
                jb.setBorder(new LineBorder(Color.black, 2));
                if (funcMouseReleased != null) funcMouseReleased.run();
            }
        });
    }

    public StandartButton(JButton jb, Runnable funcMousePressed, Runnable funcMouseReleased) {
        StyleButton(jb);
        ClickButton(jb, funcMousePressed, funcMouseReleased);
    }

}
