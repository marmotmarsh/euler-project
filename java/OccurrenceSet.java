package lib;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

/**
 * Created by Holden on 11/20/2016.
 */
public class OccurrenceSet<E extends Comparable> implements Set<E> {
    HashMap<E, Integer> hash;

    public OccurrenceSet() {
        hash = new HashMap<>(0);
    }

    public OccurrenceSet(Collection<E> c) {
        hash = new HashMap<>();
        addAll(c);
    }

    @Override
    public int size() {
        return hash.keySet().size();
    }

    @Override
    public boolean isEmpty() {
        return hash.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return hash.keySet().contains(o);
    }

    @Override
    public Iterator<E> iterator() {
        return hash.keySet().iterator();
    }

    @Override
    public E[] toArray() {
        E[] myArray = (E[]) new Object[hash.keySet().size()];
        int i = 0;

        for (E key : hash.keySet()) {
            myArray[i] = key;
            i++;
        }

        return myArray;
    }

    @Override
    public <T> T[] toArray(T[] a) {
        if (size() > a.length) {
            a = (T[]) new Object[size()];
        }

        int i = 0;
        for (E key : hash.keySet()) {
            a[i] = (T) key;
            i++;
        }
        while (i <= a.length) {
            a[i] = null;
            i++;
        }

        return a;
    }

    @Override
    public boolean add(E e) {
        if (contains(e)) {
            hash.put(e, hash.get(e) + 1);
            return false;
        }

        hash.put(e, 1);
        return true;
    }

    @Override
    public boolean remove(Object o) {
        if (contains(o)) {
            hash.put((E) o, hash.get(o) - 1);
            if (hash.get(o) <= 0) {
                hash.remove(o);
            }
            return true;
        }

        return false;
    }

    @Override
    public boolean containsAll(Collection<?> c) {
        boolean contain = true;
        for (Object o : c) {
            if (!contains(o)) {
                return false;
            }
        }

        return true;
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        boolean newAdd = false;

        for (E e : c) {
            newAdd |= add(e);
        }

        return newAdd;
    }

    @Override
    public boolean retainAll(Collection<?> c) {
        boolean newRetain = false;

        for (E e: hash.keySet()) {
            if (!c.contains(e)) {
                remove(e);
                newRetain = true;
            }
        }

        return newRetain;
    }

    @Override
    public boolean removeAll(Collection<?> c) {
        boolean newRemove = false;

        for (Object o : c) {
            newRemove |= remove(o);
        }

        return newRemove;
    }

    @Override
    public void clear() {
        hash = new HashMap<>();
    }

    public int get(Object o) {
        return hash.get(o);
    }

    public boolean unionAdd(OccurrenceSet<E> col) {
        // Only adds new occurrences to the set
        boolean newAdd = false;

        for (E e: col) {
            if (!contains(e)) {
                add(e);
            } else if (hash.get(e) < col.get(e)) {
                hash.put(e, col.get(e));
                newAdd = true;
            }
        }

        return newAdd;
    }

    public void print() {
        for(E e: hash.keySet()) {
            System.out.printf("%s, %d\n", e, hash.get(e));
        }
    }
}
