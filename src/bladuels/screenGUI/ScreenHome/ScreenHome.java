package bladuels.screenGUI.ScreenHome;

import java.awt.Color;
import java.awt.Font;

import javax.swing.*;
import javax.swing.border.LineBorder;

import bladuels.screenGUI.ScreenHome.Buttons.Buttons;
import bladuels.screenGUI.ScreenHome.Inventory.Inventory;
import bladuels.utils.UtilSounds;

public class ScreenHome extends JPanel {
	private Buttons buttonsSection = new Buttons();
	private Inventory inventorySection = new Inventory();
	public ScreenHome() {
		setBackground(Color.YELLOW);
		setLayout(null);
		add(this.buttonsSection);
		add(this.inventorySection);
		
	}
	
	
}
