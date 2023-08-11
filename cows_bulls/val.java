import java.util.*;

public class val {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String que = "YOYO";
        System.out.println("Enter your Answer :");
        String ans ="";
        char[] qnar = que.toCharArray();
        ArrayList<Character> qry = new ArrayList<>();
        for(char i:qnar)
        {
            qry.add(i);
        }

        while(!que.equals(ans))
        {
            ans = sc.next();
            char[] anar = ans.toCharArray();
            int l = que.length();
            int b=0,c=0;
            boolean[] vis = new boolean[l];
            Arrays.fill(vis,true);
            Set<Character> hs = new HashSet<>();
            for(int i=0;i<l;i++)
            {
                {
                    if (anar[i] == qnar[i]) {
                        b++;
                        vis[i] = false;
                        hs.add(anar[i]);
                    }

                }

            }
            for (int i=0;i<l;i++)
            {
                if(vis[i])
                {
                    if (qry.contains(anar[i])) {
                        c++;
                        vis[i] = false;
                    }
                }
            }
            System.out.println(b+"B"+c+"C");

        }
        System.out.println("Bingo You got it !!");
    }
}
