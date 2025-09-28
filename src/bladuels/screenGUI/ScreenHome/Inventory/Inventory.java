package bladuels.screenGUI.ScreenHome.Inventory;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.Image;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.border.LineBorder;

import bladuels.enums.ItemType;
import bladuels.utils.GetImage;

public class Inventory extends JPanel {
    public Inventory() {
        setLayout(new GridLayout(4, 6, 10, 10));  
        setBackground(Color.white);
        setBorder(BorderFactory.createCompoundBorder(
                new LineBorder(Color.black, 2),
                BorderFactory.createEmptyBorder(20, 20, 20, 20)
            ));
        setBounds(230, 120, 500, 400);

        for (int i = 0; i < 19; i++) {
            add(createSlot(new GetImage().GetImageSword(80,50,ItemType.sword,"NoobSword")));
        }
    }

    private JPanel createSlot(ImageIcon imgIcon) {
        JPanel jp = new JPanel(new GridLayout(1,1)); 
        JLabel label = new JLabel();

        Image img = imgIcon.getImage().getScaledInstance(80, 80, Image.SCALE_DEFAULT);
        label.setIcon(new ImageIcon(img));

        label.setHorizontalAlignment(JLabel.CENTER);
        label.setVerticalAlignment(JLabel.CENTER);

        jp.add(label);
        jp.setBackground(Color.white);
        jp.setBorder(new LineBorder(Color.DARK_GRAY, 2));
        return jp;
    }

}
