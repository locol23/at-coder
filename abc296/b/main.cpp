#include <bits/stdc++.h>
#include <vector>
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
    vector<string> col {"a", "b", "c", "d", "e", "f", "g", "h"};
    int row, col_num;

    rep(i, 8) {
        string s;
        cin >> s;
        row = 8 - i;
        col_num = s.find('*');

        if (col_num != std::string::npos) {
            break;
        }
    }

    cout << col[col_num] <<  row << endl;

    return 0;
}
