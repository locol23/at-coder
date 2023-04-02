#include <algorithm>
#include <bits/stdc++.h>
#include <vector>
using namespace std;
#define rep(i, n) for (int i = 0; i < (n); ++i)
using ll = long long;
using P = pair<int, int>;

void printVec(vector<ll> const &input)
{
    rep(i, input.size())
    {
        cout << input.at(i) << ' ';
    }
    cout << endl;
}

vector<vector<int>> g;
vector<int> vis;

void dfs(int c)
{
    vis[c] = true;
    for (auto &d : g[c])
    {
        if (vis[d])
            continue;
        dfs(d);
    }
}

int main()
{
    int n, x;
    cin >> n >> x;

    set<int>s;
    
    for(int i=0;i<n;i++){
    	int t;
    	cin >> t;
    	s.insert(t);
    }
    
    for (auto a:s) {
        if (s.find(a + x) != s.end()) {
            cout << "Yes" << endl;
            return 0;
        }
    }

    cout << "No" << endl;
    return 0;
}
