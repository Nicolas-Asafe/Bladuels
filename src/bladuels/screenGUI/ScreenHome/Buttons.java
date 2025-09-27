package bladuels.screenGUI.ScreenHome;

import java.awt.Color;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.border.LineBorder;

import bladuels.utils.UtilSounds;

public class Buttons extends JPanel {
	    public Buttons() {
	        setLayout(null);      
	        setBackground(Color.YELLOW);
	        setBounds(0, 0, 1000, 130); 
	        add(BackpackButton());
	        add(BattleButton());
	    }

	    private void StyleButton(JButton jb) {
	        jb.setOpaque(true);
	        jb.setBorder(new LineBorder(Color.black, 2));
	        jb.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
	        jb.setContentAreaFilled(false);
	        jb.setFocusPainted(false);
	    }

	    private void ClickSoundButton(JButton jb) {
	        jb.addMouseListener(new java.awt.event.MouseAdapter() {
	            @Override
	            public void mousePressed(java.awt.event.MouseEvent e) {
	                jb.setBorder(new LineBorder(Color.gray, 2));
	                UtilSounds.playSound("assets/sounds/click/click.mp3");
	            }

	            @Override
	            public void mouseReleased(java.awt.event.MouseEvent e) {
	                jb.setBorder(new LineBorder(Color.black, 2));
	            }
	        });
	    }

	    private void StandartButtonHome(JButton jb) {
	        StyleButton(jb);
	        ClickSoundButton(jb);
	    }

	    public JButton BackpackButton() {
	        JButton jb = new JButton(new ImageIcon("assets/screen/buttons/BackpackButton/use.png"));
	        jb.setBounds(400,33, 70, 70);
	        StandartButtonHome(jb);
	        return jb;
	    }

	    public JButton BattleButton() {
	        JButton jb = new JButton(new ImageIcon("assets/screen/buttons/BattleButton/use.png"));
	        jb.setBounds(490,33, 70, 70);
	        StandartButtonHome(jb);
	        return jb;
	    }
	}

