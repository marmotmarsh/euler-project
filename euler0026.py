




def __main__(arg):
    lines = parse_file(arg)

    graph = build_graph(lines)

    topo_sort = dfs(graph)

    for node in topo_sort:
        print(node)

    return

if __name__ == '__main__':
    __main__(sys.argv[1])
