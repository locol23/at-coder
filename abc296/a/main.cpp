#include <bits/stdc++.h>
using namespace std;
#define rep(i, n) for (int i = 0; i < (n); ++i)
using ll = long long;
using P = pair<int, int>;

void printVec(vector<int> const &input)
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
    int n;
    string s;
    cin >> n >> s;

    for(int i = 0, len = s.size(); i < len; i++) {
        if (i == 0) continue;

        if (s[i - 1] == s[i]) {
            cout << "No" << endl;
            return 0;
        }
    }

    cout << "Yes" << endl;

    return 0;
}
