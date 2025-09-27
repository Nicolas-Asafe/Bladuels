package utils;

import java.awt.Image;

import javax.swing.ImageIcon;

import enums.ItemType;

public class GetImage {
	public ImageIcon GetImageSword(int witdh,int height,ItemType type,String nameItem) {
		ImageIcon imageIcon = new ImageIcon("assets/sprites/items/"+type+"s/"+nameItem+"/use.png");
		Image img = imageIcon.getImage();
		Image newImgInSizes = img.getScaledInstance(witdh,height,Image.SCALE_SMOOTH);
		ImageIcon newImageIcon = new ImageIcon(newImgInSizes);
		
		return newImageIcon;
	}
}
