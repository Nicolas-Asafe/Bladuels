package bladuels.exceptions;

@SuppressWarnings("serial")
public class ItemAlreadyExists extends RuntimeException{
	public ItemAlreadyExists(String msg) {
		super(msg);
	}
}
