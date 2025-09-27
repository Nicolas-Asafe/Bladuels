package screenGUI;
import javax.swing.*;

import screenGUI.ScreenHome.ScreenHome;

public class Screen extends JFrame {
	public Screen() {
	    try {
	        initWindow();	 
	        System.out.println("[200] Window load successfully");
	        initIcon();
	        System.out.println("[200] Icon load successfully");
	        initScreenHome();
	        System.out.println("[200] ScreenHome load successfully");

	        System.out.println("[200] Screens load successfully");
	    } catch (Error err) {
	        System.out.println("[500] " + err);
	    }
	}
	private void initScreenHome() {
		ScreenHome screenHome = new ScreenHome();
        screenHome.setBounds(0, 0, 1000, 700); 
        add(screenHome);
	}
	private void initIcon() {
		 ImageIcon icon = new ImageIcon("assets/apresentative/icon/icon.png");
	        setIconImage(icon.getImage());

	        setVisible(true);
	}
	private void initWindow() {
		setTitle("Bladuels");
        setSize(1000, 700);
        setResizable(false);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(null);
        setLocationRelativeTo(null);
	}

}
