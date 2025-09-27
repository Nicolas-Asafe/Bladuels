package bladuels;
import bladuels.screenGUI.*;

public class Main {
	public static void main(String[] args) {		
		try {			
			new Screen();
			System.out.println("[200] Game running successfully");
		}catch(Error err) {
			System.out.println("[500]" + err);
		}
	}
}
