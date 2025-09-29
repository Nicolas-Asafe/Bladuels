package bladuels.exceptions;

@SuppressWarnings("serial")
public class YouCantDoThis extends RuntimeException {
	public YouCantDoThis(String msg) {
		super(msg);
	}
}
