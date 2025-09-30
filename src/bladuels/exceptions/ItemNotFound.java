package bladuels.exceptions;

@SuppressWarnings("serial")
public class ItemNotFound extends RuntimeException {
	public ItemNotFound(String msg){
		super(msg);
	}
}
