package bladuels.screenGUI.ScreenHome;

import java.awt.Color;
import java.awt.Font;

import javax.swing.*;
import javax.swing.border.LineBorder;

import bladuels.utils.UtilSounds;

public class ScreenHome extends JPanel {
	private Buttons buttonsKit = new Buttons();
	public ScreenHome() {
		setBackground(Color.YELLOW);
		setLayout(null);
		add(this.buttonsKit);
		
	}
	
	
}
