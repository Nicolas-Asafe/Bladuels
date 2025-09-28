package bladuels.screenGUI.ScreenHome.Buttons;

import java.awt.Color;
import bladuels.screenGUI.ScreenHome.Buttons.StandartButton;
import java.util.function.Function;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.border.LineBorder;

import bladuels.utils.UtilSounds;

public class Buttons extends JPanel {
	    public Buttons() {
	        setLayout(null);      
	        setBackground(Color.YELLOW);
	        setBounds(0, 0, 1000, 120); 
	        add(BackpackButton());
	        add(BattleButton());
	    }

	    public JButton BackpackButton() {
	        JButton jb = new JButton(new ImageIcon("assets/screen/buttons/BackpackButton/use.png"));
	        jb.setBounds(400,33, 70, 70);
	       new StandartButton(jb, 
	            () -> System.out.println("Backpack Pressed"), 
	            () -> System.out.println("Backpack Released"));
	        return jb;
	    }

	    public JButton BattleButton() {
	        JButton jb = new JButton(new ImageIcon("assets/screen/buttons/BattleButton/use.png"));
	        jb.setBounds(490,33, 70, 70);
	        new StandartButton(jb, 
	            () -> System.out.println("Battle Pressed"), 
	            () -> System.out.println("Battle Released"));
	        return jb;
	    }

	}

